
import 'react-quill/dist/quill.snow.css';
import he from "he";
import CustomQuillEditor from '../utilities/admin/CustomQuillEditor';
const InputField = ({
  type = 'text', 
  label,
  name,
  placeholder,
  register,
  error,
  value,
  onChange,
  preview,
  col = 'col-span-12',
  editPage=false,
}) => {
  return (
    <div className={col}>
      <div className="space-y-1">
        {label && (
          <label className="block font-montserrat font-[600] text-[14px] text-gray-700 tracking-[1px]">
            {label}
          </label>
        )}

        {type === 'editor' ? (
          <CustomQuillEditor
  value={editPage ? he.decode(value) : value}
  onChange={onChange}
/>
        ) : type === 'image' ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={onChange}
              className="bg-white font-montserrat appearance-none rounded-lg block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] focus:border-transparent focus:z-10 sm:text-sm"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="h-20 mt-2 rounded object-cover"
              />
            )}
          </>
        ) : (
          <input
            type={type}
            {...register(name)}
            className="bg-white font-montserrat appearance-none rounded-lg block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] focus:border-transparent focus:z-10 sm:text-sm"
            placeholder={placeholder}
          />
        )}

        {error && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
    </div>
  );
};

export default InputField;
