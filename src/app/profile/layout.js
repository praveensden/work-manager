const ProfileLayout = ({ children }) => {
  return (
    <div>
      <h1>Profile Header</h1>
      {children}
      <h1>Profile Footer</h1>
    </div>
  );
};

export default ProfileLayout;
