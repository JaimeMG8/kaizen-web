export function Input({
    placeholder,
    value,
    onChange
  }: {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 px-3 py-2 rounded-xl w-full"
      />
    );
  }
  