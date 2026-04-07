import { AuthGate } from "@/components/auth/auth-gate";
import { ProfilePageContent } from "@/components/auth/profile-page-content";

const ProfilePage = () => {
  return (
    <AuthGate mode="protected">
      <ProfilePageContent />
    </AuthGate>
  );
};

export default ProfilePage;
