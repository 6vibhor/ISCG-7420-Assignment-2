import React, { useEffect, useState } from "react";
import apiClient from "../../request";
import Table from "../common/Table";
import ManageLectures from "./ManageLectures";

function Lectures() {
  const initial = {
    staffID: "",
    lecture_id: "",
    first_name: "",
    last_name: "",
    email: "",
    DOB: "",
    password: "",
    classLists:[]
  };
  const [lists, setLists] = useState([]);
  const [changeInfo, setChangeInfo] = useState(initial);
  const [manageMode, setManageMode] = useState(false);

  const getLecturers = async () => {
    const { ok, data } = await apiClient.get("lecturer/");
    if (ok) {
      setLists(data.lecturers);
      setManageMode(false);
      setChangeInfo(initial);
    }
  };

  const onUpdate = async (obj) => {
    const { ok } = await apiClient.put("lecturer/", obj);
    if (ok) {
      getLecturers();
    }
  };

  const onRemove = async ({ staffID }) => {
    const { ok } = await apiClient.delete("lecturer/", { staffID });
    if (ok) {
      getLecturers();
    }
  };

  const onCreate = async (obj) => {
    const { ok } = await apiClient.post("lecturer/", obj);
    if (ok) {
      getLecturers();
    }
  };

  useEffect(() => {
    getLecturers();
  }, []);
  return (
    <>
      <h1 className="text-center mt-4">Lectures</h1>
      <div className="row">
        {!manageMode && (
          <div className="col-sm-6">
            <button
            className="btn btn-info mb-3 text-white"
            onClick={() => setManageMode(true)}
          >
            Create a lecture
          </button>
          </div>
        )}
        {manageMode ? (
          <ManageLectures
            setCancel={setManageMode}
            info={changeInfo}
            onCreate={onCreate}
            onUpdate={onUpdate}
            isUpdate={changeInfo.staffID == "" ? false : true}
          />
        ) : (
          <Table
            listOfItem={lists}
            onRemove={onRemove}
            onUpdate={(obj) => {
              setChangeInfo(obj), setManageMode(true);
            }}
          />
        )}
      </div>
    </>
  );
}

export default Lectures;
