type PersonProps = {
  name: string;
  email: string;
};

const Person = ({ name, email }: PersonProps) => (
  <div className="flex flex-col">
    <span className="text-sm leading-4">{name}</span>
    <span className="text-graysubtitle text-[11px]">{email}</span>
  </div>
);

const people = [
  { name: "Atienza, Carmelo Ellezandro", email: "cratienza@up.edu.ph" },
  { name: "Castañeda, Kristina Cassandra", email: "krcastaneda1@up.edu.ph" },
  { name: "Dispo, Vincent Angelo", email: "vdispo@up.edu.ph" },
  { name: "Ducay, James Daniel", email: "jpducay@up.edu.ph" },
  { name: "Gacho, Loridge Anne", email: "lagacho@up.edu.ph" },
  { name: "Gregorio, Herminio", email: "hlgregorio@up.edu.ph" },
];

export default function HomePageFooter() {
  return (
    <footer className="bg-green flex min-h-24 w-full items-center justify-center border-t sm:gap-10">
      <div className="flex flex-col gap-4 p-6 pr-0 sm:flex-row sm:gap-8">
        <div className="flex flex-wrap sm:gap-12">
          {people.map((person, index) => (
            <Person key={index} name={person.name} email={person.email} />
          ))}
        </div>
      </div>
    </footer>
  );
}
