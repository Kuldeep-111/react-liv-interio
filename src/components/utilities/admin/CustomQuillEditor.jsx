// components/CustomQuillEditor.jsx
import { useRef } from 'react';
import 'react-quill/dist/quill.snow.css';

const CustomQuillEditor = ({ value, onChange }) => {
  const quillRef = useRef();


  

  const imageHandler = () => {
    const token = localStorage.getItem('authToken');
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        
        const res = await fetch('https://livinterio.com/api/admin/blog/proxyfile', {
          method: 'POST',
          headers: {
          'Authorization': `Bearer ${token}`, 
        },
          body: formData,
        });

        const data = await res.json();
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', data.file);
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), []);

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      className="quill-editor"
    />
  );
};

export default CustomQuillEditor;
