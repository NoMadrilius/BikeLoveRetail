const InputWithPlaceholder = ({
  label = "",
  placeholder = "",
  type = "text",
    value,setValue, inputRef
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  value?:string
  setValue?:(v:string)=>void
  inputRef?:React.MutableRefObject<HTMLInputElement|null>
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="text-t-grey font-light leading-[120%]">{label}</label>
      )}
      <input value={value} onChange={e=>setValue&&setValue(e.target.value)}
             ref={inputRef}
        type={type}
        placeholder={placeholder}
        className="px-5 py-3 border border-gray rounded-lg text-t-grey font-light w-full"
      />
    </div>
  );
};

export default InputWithPlaceholder;
