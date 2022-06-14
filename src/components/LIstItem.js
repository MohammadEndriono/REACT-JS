import React from "react";
import Button from "./Button";

export default function LIstItem(props) {
  return (
    <div className="bg-gray-300 shadow-lg max-w-3xl mx-auto rounded-lg my-[10px] p-2 flex-1 w-50">
      <h1 class="text-center text-xl font-bold">List Todo</h1>
      <p className="text-[18px] font-semibold">{props.name}</p>
      <div className="flex justify-end">
        <Button text="Ubah" backgroundColor="#CDC2AE" onClick={props.update}/>
        <Button text="Hapus" backgroundColor="#F24C4C" onClick={props.delete}/>
      </div>
    </div>
  );
}
