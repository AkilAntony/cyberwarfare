import type { Dispatch, SetStateAction } from "react";

interface Props {
  setInput: Dispatch<SetStateAction<string>>;
  input: string;
  placeholder?: string;
  styles?: string;
  disable?: boolean;
}

const SearchInput = ({
  input,
  setInput,
  styles,
  placeholder,
  disable,
}: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        disabled={disable}
        onChange={(e) => setInput(e.target.value)}
        className={`w-full md:p-2 p-1 px-5 outline-none border rounded-full ${styles}`}
      />
    </div>
  );
};

export default SearchInput;
