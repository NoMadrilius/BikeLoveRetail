const InputWithPlaceholder = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="px-5 py-3 border border-gray rounded-lg text-t-grey font-light"
    />
  );
};

export default InputWithPlaceholder;
