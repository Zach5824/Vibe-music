const Admin = ({ addTrack }) => {
  const [form, setForm] = useState({
    name: '',
    artist: '',
    genre: '',
    bpm: '',
    key: '',
    duration: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.artist) {
      addTrack(form);
      setForm({ name: '', artist: '', genre: '', bpm: '', key: '', duration: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };
  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };
}
 