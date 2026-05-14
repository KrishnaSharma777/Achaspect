import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Modal,
} from "@mui/material";
import { db } from "./firebase";
import { uploadToCloudinary } from "./utils/cloudinaryUpload";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";


import { useDropzone } from "react-dropzone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AdminPanel = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);

  // 🔥 realtime data
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects"), (snap) => {
      setProjects(
        snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    return () => unsub();
  }, []);

  // 🔥 Drag & Drop Upload
  const onDrop = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // 🔥 Reorder images
  const handleDrag = (result) => {
    if (!result.destination) return;

    const items = Array.from(images);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);

    setImages(items);
  };

  // 🔥 Upload
 const handleUpload = async () => {
  if (!form.title || !form.category || images.length === 0) {
    alert("Fill all fields");
    return;
  }

 try {
  let urls = [];

  for (let img of images) {
    const url = await uploadToCloudinary(img);
    urls.push(url);
  }

  // 👇 YAHI PAR CHANGE KARNA HAI
  await addDoc(collection(db, "projects"), {
    ...form,
    coverImage: urls[0],
    images: urls,
    createdAt: new Date(),
  });

  alert("Added ✅");

    setImages([]);
    setForm({ title: "", category: "", description: "" });
  } catch (err) {
    console.error(err);
    alert("Upload failed ❌");
  }
};

  // 🔥 Delete
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "projects", id));
  };

  // 🔥 Update
  const handleUpdate = async () => {
    const refDoc = doc(db, "projects", editProject.id);

    await updateDoc(refDoc, {
      title: editProject.title,
      category: editProject.category,
      description: editProject.description,
    });

    alert("Updated ✅");
    setEditProject(null);
  };

  return (
    <Box p={3}>

      {/* FORM */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5">Add Project</Typography>

        <TextField
          fullWidth
          label="Title"
          sx={{ my: 2 }}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <TextField
          fullWidth
          label="Category"
          sx={{ my: 2 }}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <TextField
          fullWidth
          multiline
          rows={3}
          label="Description"
          sx={{ my: 2 }}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        {/* 🔥 DROPZONE */}
        <Box
          {...getRootProps()}
          sx={{
            border: "2px dashed #aaa",
            p: 3,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          <Typography>Drag & Drop Images here</Typography>
        </Box>

        {/* 🔥 IMAGE REORDER */}
        <DragDropContext onDragEnd={handleDrag}>
<Droppable droppableId="images" direction="horizontal" isDropDisabled={false}>
              {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.droppableProps}
                sx={{ display: "flex", gap: 2, mt: 2 }}
              >
                {images.map((img, index) => (
                  <Draggable key={index} draggableId={index.toString()} index={index}>
                    {(provided) => (
                      <img
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        src={URL.createObjectURL(img)}
                        width={100}
                        height={80}
                        style={{ borderRadius: "10px" }}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
        <Button variant="contained" onClick={handleUpload} sx={{ mt: 2 }}>
  Upload Project 🚀
</Button>

       
      </Paper>

      {/* 🔥 PROJECT LIST */}
      {projects.map((p) => (
        <Paper key={p.id} sx={{ p: 2, mb: 2 }}>
          <Typography>{p.title}</Typography>

          <Button onClick={() => setEditProject(p)}>Edit</Button>
          <Button onClick={() => handleDelete(p.id)}>Delete</Button>
        </Paper>
      ))}

      {/* 🔥 EDIT MODAL */}
      <Modal open={!!editProject} onClose={() => setEditProject(null)}>
        <Box sx={{ bgcolor: "#fff", p: 3, m: "10% auto", width: 400 }}>
          <TextField
            fullWidth
            value={editProject?.title || ""}
            onChange={(e) =>
              setEditProject({ ...editProject, title: e.target.value })
            }
          />

          <Button onClick={handleUpdate}>Update</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminPanel;