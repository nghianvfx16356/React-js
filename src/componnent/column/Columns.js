import React, { useState, useEffect } from "react";
import "./Columns.css";
import axios from "axios";

function ColumnsContainer() {
  const [columns, setColumns] = useState([
    // {
    //   _id: "0.456040553423648",
    //   name: "jdwqjdiwi",
    //   createdAt: "2023-07-06T04:38:50.087Z",
    //   updatedAt: "2023-07-06T04:38:50.087Z",
    //   items: [],
    //   __v: 0,
    // },
    // {
    //   _id: "0.480957794500696",
    //   name: "dwhdihqwidhwq",
    //   createdAt: "2023-07-06T04:39:15.750Z",
    //   updatedAt: "2023-07-06T04:39:15.750Z",
    //   items: [],
    //   __v: 0,
    // },
  ]);
  const [inputValue, setInputValue] = useState("");
  //const [datas, setDatas] = useState(undefined);

  //get data API
  useEffect(() => {
    fetch("http://localhost:8080/v1/columns/")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setColumns(data);
      });
  }, []);

  const addColumn = () => {
    if (inputValue.trim() !== "") {
      const newColumn = {
        id: Math.random().toString(),
        name: inputValue,
        items: [],
      };
      setColumns([...columns, newColumn]);

      console.log(`new Column`, newColumn.id);
      postData(newColumn.id, newColumn.name);
      setInputValue("");
    }
  };

  function postData(id, data) {
    axios
      .post(`http://localhost:8080/v1/columns/${id}`, {
        name: data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function deleteData(columnId) {
    axios
      .delete(`http://localhost:8080/v1/columns/${columnId}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const deleteColumn = (columnId) => {
    const updatedColumns = columns.filter((column) => column.id !== columnId);
    console.log(`delete column`, updatedColumns);
    deleteData(columnId);
    setColumns(updatedColumns);
  };

  const addItem = (columnId, item) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          items: [...column.items, item],
        };
      }
      return column;
    });
    console.log(`add item`, updatedColumns);
    setColumns(updatedColumns);
  };

  const deleteItem = (columnId, itemIndex) => {
    const updatedColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          items: column.items.filter((_, index) => index !== itemIndex),
        };
      }
      return column;
    });
    setColumns(updatedColumns);
  };

  const handleDragStart = (e, columnId, itemIndex) => {
    e.dataTransfer.setData("columnId", columnId);
    e.dataTransfer.setData("itemIndex", itemIndex);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumnId) => {
    const sourceColumnId = e.dataTransfer.getData("columnId");
    const itemIndex = Number(e.dataTransfer.getData("itemIndex"));

    const sourceColumn = columns.find((column) => column.id === sourceColumnId);
    const item = sourceColumn.items[itemIndex];

    if (sourceColumnId === targetColumnId) return;

    const updatedColumns = columns.map((column) => {
      if (column.id === sourceColumnId) {
        return {
          ...column,
          items: column.items.filter((_, index) => index !== itemIndex),
        };
      }
      if (column.id === targetColumnId) {
        return {
          ...column,
          items: insertAt(column.items, item, itemIndex),
        };
      }

      return column;
    });
    console.log(`sourceColumnId`, sourceColumnId);
    setColumns(updatedColumns);
  };

  const insertAt = (array, item, index) => {
    const newArray = [...array];
    newArray.splice(index, 0, item);
    return newArray;
  };

  return (
    <div>
      <input
        className="input-column"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter column name"
      />
      <button className="add-column" onClick={addColumn}>
        Add Column
      </button>
      <div className="columns-container">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            columns={columns}
            setColumns={setColumns} // Pass setColumns as a prop
            onDeleteColumn={deleteColumn}
            onAddItem={addItem}
            onDeleteItem={deleteItem}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
}

function Column({
  column,
  columns,
  setColumns,
  onDeleteColumn,
  onAddItem,
  onDeleteItem,
  onDragStart,
  onDragOver,
  onDrop,
}) {
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      onAddItem(column.id, inputValue);
      setInputValue("");
    }
  };

  const deleteItem = (itemIndex) => {
    onDeleteItem(column.id, itemIndex);
  };

  const handleItemDragStart = (e, itemIndex) => {
    onDragStart(e, column.id, itemIndex);
  };

  const handleItemDragOver = (e) => {
    e.preventDefault();
  };

  const handleItemDrop = (e, targetItemIndex) => {
    const sourceColumnId = e.dataTransfer.getData("columnId");
    const sourceItemIndex = Number(e.dataTransfer.getData("itemIndex"));

    if (sourceColumnId === column.id && sourceItemIndex === targetItemIndex)
      return;

    const updatedColumns = columns.map((col) => {
      if (col.id === column.id) {
        const items = [...col.items];
        const [item] = items.splice(sourceItemIndex, 1);
        items.splice(targetItemIndex, 0, item);
        return {
          ...col,
          items,
        };
      }
      return col;
    });

    setColumns(updatedColumns);
  };

  const handleColumnDragStart = (e) => {
    e.dataTransfer.setData("columnId", column.id);
  };

  const handleColumnDragOver = (e) => {
    e.preventDefault();
  };

  const handleColumnDrop = (e) => {
    const sourceColumnId = e.dataTransfer.getData("columnId");

    if (sourceColumnId === column.id) return;

    const sourceIndex = columns.findIndex((col) => col.id === sourceColumnId);
    const targetIndex = columns.findIndex((col) => col.id === column.id);

    const updatedColumns = [...columns];
    updatedColumns.splice(
      targetIndex,
      0,
      updatedColumns.splice(sourceIndex, 1)[0]
    );

    setColumns(updatedColumns);
  };

  return (
    <div
      className="column"
      draggable="true"
      onDragStart={handleColumnDragStart}
      onDragOver={handleColumnDragOver}
      onDrop={handleColumnDrop}
    >
      <div className="column-content">
        <h2>{column.name}</h2>
        <button
          className="delete-column"
          onClick={() => onDeleteColumn(column.id)}
        >
          X
        </button>
      </div>

      <div>
        <input
          className="input-value"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter an item"
        />
        <button className="add-item" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="items">
        {column.items.map((item, index) => (
          <Item
            key={index}
            item={item}
            onDeleteItem={() => deleteItem(index)}
            onDragStart={(e) => handleItemDragStart(e, index)}
            onDragOver={handleItemDragOver}
            onDrop={(e) => handleItemDrop(e, index)}
          />
        ))}
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onDragStart, onDragOver, onDrop }) {
  return (
    <div
      className="item"
      draggable="true"
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {item}
      <button className="delete-item" onClick={onDeleteItem}>
        X
      </button>
    </div>
  );
}

export default ColumnsContainer;
