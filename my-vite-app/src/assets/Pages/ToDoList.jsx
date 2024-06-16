import React, { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function addToList() {
    if (newItem !== "") {
      setList([...list, { id: list.length, text: newItem }]);
      setNewItem("");
    }
  }

  function handleTextChange(e) {
    setNewItem(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addToList();
    }
  }

  function removeItem(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.header}>To Do List</h2>
        <ul style={styles.list}>
          {list.map((item) => (
            <li key={item.id} style={styles.listItem}>
              🥳 {item.text}
              <button
                style={styles.removeButton}
                onClick={() => removeItem(item.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter Your Text"
            onChange={handleTextChange}
            value={newItem}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
          <button onClick={addToList} style={styles.addButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    paddingTop: "5rem",
    height: "100vh",
    backgroundColor: "rgba(240, 240, 240, 0.2)",
  },
  container: {
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    padding: "20px",
    paddingBottom: "40px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  header: {
    textTransform: "capitalize",
    textAlign: "center",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },
  removeButton: {
    backgroundColor: "#ff6b6b",
    border: "none",
    borderRadius: "50%",
    color: "#fff",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  input: {
    flexGrow: 1,
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default ToDoList;
