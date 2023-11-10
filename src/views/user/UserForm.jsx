import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axios.js";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import image from "../../../public/images/default-profile.png"

export default function UserForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: null,
    image: null,
    image_url: null,
  });
  const [errors, setErrors] = useState(null);
  const { setNotification } = useStateContext();
  const [loading, setLoading] = useState(false);


  const onImageChoose = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUser({
        ...user,
        image: file,
        image_url: reader.result,
      });
      ev.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  if (id) {
    useEffect(() => {
      setLoading(true);
      axiosClient
        .get(`/users/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setUser(data.data);
        })
        .catch(() => {
          setLoading(false);
        });
    }, []);
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = { ...user };
    if (payload.image) {
      payload.image = payload.image_url;
    }
    if (id) {
      axiosClient
        .put(`/users/${id}`, payload)
        .then(() => {
          setNotification("User was successfully updated");
          navigate("/users");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      console.log("Payload:", payload);
      axiosClient
        .post("/users", payload)
        .then((response) => {
          setNotification("User was successfully created");
          navigate("/users");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <>
      {errors && (
        <div className="alert">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}
      <div className="w-full h-20  justify-between items-center inline-flex">
        <div className="text-black text-5xl font-bold font-['Roboto'] leading-[62.40px]">
          {user.id && <h1>Update User: {user.name} </h1>}
          {!user.id && <h1>New User</h1>}
        </div>
      </div>
      <div className="card animated fadeInDown">
        {loading && <div className="text-center">Loading...</div>}

        {!loading && (
          <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4 ">
            <div className="grid grid-colms-1 gab-8 ">
              <input
                value={user.name}
                onChange={(ev) => setUser({ ...user, name: ev.target.value })}
                placeholder="Full Name"
                className="outline-none bg-white w-full border-2 border-gray-300 mb-[15px] px-[15px] py-[15px] box-border text-[14px] transition duration-300 rounded-[16px] focus:border-purple"
              />

              <input
                value={user.email}
                onChange={(ev) => setUser({ ...user, email: ev.target.value })}
                placeholder="Email"
                className="outline-none bg-white w-full border-2 border-gray-300 mb-[15px] px-[15px] py-[15px] box-border text-[14px] transition duration-300 rounded-[16px] focus:border-purple"
              />
              <select
                value={user.role}
                onChange={(ev) => setUser({ ...user, role: ev.target.value })}
                className="outline-none bg-white w-full border-2 border-gray-300 mb-[15px] px-[15px] py-[15px] box-border text-[14px] transition duration-300 rounded-[16px] focus:border-purple"
              >
                <option value="">Select Role</option>
                <option value="0">Membre</option>
                <option value="1">Responsable</option>
                <option value="2">Admin</option>
              </select>

              <input
                type="password"
                onChange={(ev) =>
                  setUser({ ...user, password: ev.target.value })
                }
                placeholder="Password"
                className="outline-none bg-white w-full border-2 border-gray-300 mb-[15px] px-[15px] py-[15px] box-border text-[14px] transition duration-300 rounded-[16px] focus:border-purple"
              />
              <input
                type="password"
                onChange={(ev) =>
                  setUser({ ...user, password_confirmation: ev.target.value })
                }
                placeholder="Password Confirmation"
                className="outline-none bg-white w-full border-2 border-gray-300 mb-[15px] px-[15px] py-[15px] box-border text-[14px] transition duration-300 rounded-[16px] focus:border-purple"
              />
            </div>

            <div className="flex justify-center items-center">
                <label for="profile-image" class="file-input-label">
                  <div class="relative w-[360px] h-[360] rounded-full overflow-hidden border-2 border-gray-300 bg-white">
                    <img
                      src={
                        user.image_url ||
                        (id
                          ? `${import.meta.env.VITE_API_BASE_URL}/${user.image}`
                          : image)
                      }
                      alt="Profile Image"
                      class="w-full h-full object-cover"
                    />
                    <input
                      type="file"
                      id="profile-image"
                      class="hidden"
                      accept="image/*"
                      onChange={onImageChoose} 
                    />
                    {user.image && (
                      <button
                        onClick={() => setUser({ ...user, image: "" })}
                        class="delete-button"
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    )}
                  </div>
                </label>
              </div>
                          <div className="grid grid-cols-1 w-1/12">
              <button
                type="submit"
                className="w-[81px] px-3.5 py-2 bg-emerald-600 rounded-lg shadow justify-center items-center gap-2 flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]"
              >
                Save
              </button>{" "}
            </div>
          </form>
        )}
      </div>
    </>
  );
}
