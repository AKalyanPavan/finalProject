function Button ({customStyle, name}) {
  return (
    <div className={"w-max bg-[#2BB77B] h-[auto] p-[10px] rounded-[5px] text-[#FFFFFF] font-bold cursor-pointer " + customStyle}>
      <h1>{name}</h1>
    </div>
  );
}

export default Button;