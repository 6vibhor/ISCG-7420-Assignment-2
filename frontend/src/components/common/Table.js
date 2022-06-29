import React from "react";

function Table({ listOfItem,onUpdate,onRemove,student=false }) {
  return (
    <div className="table-responsive">
      <table className="table text-nowrap">
        <thead className="thead" style={{ background: "#f56580db",color:"white !important" }}>
          <tr>
            {listOfItem.length > 0 &&
              Object.keys(listOfItem[0]).map((head,key) => !['id','staffID','password','studentID'].includes(head) && <th key={key} scope="col">{head.toUpperCase()}</th> )}
            {(listOfItem.length > 0 && !student)&& <th scope="col" className="border-top-0 text-white">ACTION</th>}
          </tr>
        </thead>
        <tbody>
          {listOfItem?.map((item,key) => (
            <tr key={key}>
              {Object.keys(item).map((contentHead,no) => (
                !['id','staffID','password','studentID'].includes(contentHead)&& <td key={no}>{item[contentHead]}</td>
              ))}
              <td style={{width:'250px'}}>
                 {(!item.enrolTime && !student )&& <button onClick={() =>onUpdate(item)} className="btn btn-primary  ml-3" >Update</button>}
                  {!student && <button onClick={() =>onRemove(item)} className="btn btn-danger  ml-3">Remove</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
