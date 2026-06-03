import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Modal,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
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
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const AdminPanel = () => {
  // 🔥 VIEW STATE
  const [view, setView] = useState("add");
const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [images, setImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState(null);

  // 🔥 GET DATA
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects"), (snap) => {
      setProjects(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, []);

  // 🔥 DROPZONE
  const onDrop = (acceptedFiles) => {
    setImages((prev) => [...prev, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 10 * 1024 * 1024,
  });

  // 🔥 DRAG
  const handleDrag = (result) => {
    if (!result.destination) return;

    const items = Array.from(images);

    const [reordered] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reordered);

    setImages(items);
  };

  // 🔥 ADD PROJECT
  const handleUpload = async () => {
    if (!form.title || !form.category || images.length === 0) {
      alert("Fill all fields");
      return;
    }

    try {
          setLoading(true); // 🔥 start loading

      let urls = [];

      for (let img of images) {
        const url = await uploadToCloudinary(img);
        urls.push(url);
      }

      await addDoc(collection(db, "projects"), {
        ...form,
        images: urls,
        coverImage: urls[0],
        createdAt: new Date(),
      });

      alert("Project Added ✅");

      setForm({
        title: "",
        category: "",
        description: "",
      });

      setImages([]);
    } catch (err) {
      console.log(err);
      alert("Upload Failed ❌");
    }finally {
      setLoading(false); // 🔥 end loading
    }
  };

  // 🔥 DELETE PROJECT
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "projects", id));
  };

  // 🔥 UPDATE PROJECT
  const handleUpdate = async () => {
    try {
      const ref = doc(db, "projects", editProject.id);

      let finalImages = [...editProject.images];

      // upload new images
      if (editProject.newImages?.length > 0) {
        for (let img of editProject.newImages) {
          const url = await uploadToCloudinary(img);
          finalImages.push(url);
        }
      }

      await updateDoc(ref, {
        title: editProject.title,
        category: editProject.category,
        description: editProject.description,
        images: finalImages,
        coverImage: finalImages[0] || "",
      });

      alert("Updated ✅");

      setEditProject(null);
    } catch (err) {
      console.log(err);
      alert("Update Failed ❌");
    }
  };

  return (
    <Box p={3}>

      {/* 🔥 TOP BUTTONS */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button
          variant={view === "add" ? "contained" : "outlined"}
          onClick={() => setView("add")}
        >
          Add Project
        </Button>

        <Button
          variant={view === "projects" ? "contained" : "outlined"}
          onClick={() => setView("projects")}
        >
          View Projects
        </Button>
      </Box>

      {/* 🔥 ADD PROJECT FORM */}
      {view === "add" && (
        <Paper sx={{ p: 3, mb: 4 }}>

          <Typography variant="h5" mb={2}>
            Add Project
          </Typography>

          <TextField
            fullWidth
            label="Title"
            sx={{ mb: 2 }}
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            label="Category"
            sx={{ mb: 2 }}
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
          />

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description"
            sx={{ mb: 2 }}
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          {/* 🔥 DROPZONE */}
          <Box
            {...getRootProps()}
            sx={{
              border: "2px dashed #999",
              p: 4,
              textAlign: "center",
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />

            <Typography>
              Drag & Drop Images Here
            </Typography>
          </Box>

          {/* 🔥 PREVIEW */}
          <DragDropContext onDragEnd={handleDrag}>
            <Droppable
              droppableId="images"
              direction="horizontal"
            >
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {images.map((img, index) => (
                    <Draggable
                      key={index}
                      draggableId={index.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <img
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          src={URL.createObjectURL(img)}
                          width={100}
                          height={80}
                          style={{
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>
<Button
  variant="contained"
  disabled={loading}
  onClick={handleUpload}
  sx={{
    mt: 3,
    bgcolor: "#666565",
    "&:hover": { bgcolor: "#555" },
  }}
>
  {loading ? (
    <>
      <CircularProgress size={20} sx={{ color: "#fff", mr: 1 }} />
      Uploading...
    </>
  ) : (
    "Upload Project 🚀"
  )}
</Button>
        </Paper>
      )}

    {/* 🔥 PROJECT LIST */}
{view === "projects" && (
  <Box>

    <Typography variant="h5" mb={3}>
      All Projects
    </Typography>

    {projects.map((p) => (
      <Paper
        key={p.id}
        sx={{
          p: 2,
          mb: 2,
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          gap: 2,
        }}
      >

        {/* LEFT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
            width: "100%",
          }}
        >

          {/* IMAGE */}
          <img
            src={p.coverImage}
            alt=""
            style={{
              width: "100%",
              maxWidth: "120px",
              height: "90px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          {/* TEXT */}
          <Box>
            <Typography variant="h6">
              {p.title}
            </Typography>

            <Typography
              sx={{
                color: "#666",
                fontSize: "14px",
              }}
            >
              {p.category}
            </Typography>
          </Box>
        </Box>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: {
              xs: "100%",
              sm: "auto",
            },
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={() => setEditProject(p)}
          >
            Edit
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={() => handleDelete(p.id)}
          >
            Delete
          </Button>
        </Box>
      </Paper>
    ))}
  </Box>
)}

      {/* 🔥 EDIT MODAL */}
      <Modal
        open={!!editProject}
        onClose={() => setEditProject(null)}
      >
        <Box
          sx={{
            bgcolor: "#fff",
            p: 3,
            width: 500,
            borderRadius: 3,
            m: "4% auto",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {editProject && (
            <>
              <Typography variant="h5" mb={2}>
                Edit Project
              </Typography>

              <TextField
                fullWidth
                label="Title"
                sx={{ mb: 2 }}
                value={editProject.title}
                onChange={(e) =>
                  setEditProject({
                    ...editProject,
                    title: e.target.value,
                  })
                }
              />

              <TextField
                fullWidth
                label="Category"
                sx={{ mb: 2 }}
                value={editProject.category}
                onChange={(e) =>
                  setEditProject({
                    ...editProject,
                    category: e.target.value,
                  })
                }
              />

              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                sx={{ mb: 2 }}
                value={editProject.description}
                onChange={(e) =>
                  setEditProject({
                    ...editProject,
                    description: e.target.value,
                  })
                }
              />

              {/* 🔥 IMAGES */}
              <Typography mb={1}>
                Project Images
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {editProject.images?.map((img, i) => (
                  <Box
                    key={i}
                    sx={{ position: "relative" }}
                  >
                    <img
                      src={img}
                      width={100}
                      height={80}
                      style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />

                    {/* DELETE IMAGE */}
                    <Button
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        minWidth: 20,
                        bgcolor: "red",
                        color: "#fff",
                      }}
                      onClick={() => {
                        const updated =
                          editProject.images.filter(
                            (_, index) => index !== i
                          );

                        setEditProject({
                          ...editProject,
                          images: updated,
                        });
                      }}
                    >
                      X
                    </Button>
                  </Box>
                ))}
              </Box>

              {/* 🔥 ADD NEW IMAGES */}
              <Button
                component="label"
                variant="outlined"
                sx={{ mt: 3 }}
              >
                Add More Images

                <input
                  hidden
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) =>
                    setEditProject({
                      ...editProject,
                      newImages: Array.from(
                        e.target.files
                      ),
                    })
                  }
                />
              </Button>

              {/* NEW IMAGE PREVIEW */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 2,
                  flexWrap: "wrap",
                }}
              >
                {editProject.newImages?.map(
                  (img, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(img)}
                      width={100}
                      height={80}
                      style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  )
                )}
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={handleUpdate}
              >
                Update Project 🚀
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminPanel;