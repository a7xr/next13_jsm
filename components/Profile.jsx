import PromptCard from "./PromptCard";

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
        <h1 className="x">
            {name} Profile
        </h1>
    </section>
  );
};

export default Profile;
