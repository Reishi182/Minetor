import { users } from "../data/data";
import MentorCards from "./MentorCards";
const SecondSection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Berbagai mentor yang siap membantu!
        </h1>
        <h4 className="mb-8 text-center text-lg font-semibold text-white">
          Mulai kembangkan skill mu bersama kami!
        </h4>
        <div className="flex justify-center">
          <div className="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <MentorCards key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
