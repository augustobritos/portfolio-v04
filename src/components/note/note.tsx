import Link from "next/link";
import Text from "../shared/text";
import NoteForm from "./note-form";

const Note = () => {
  return (
    <section className="max-w-2xl w-full mx-auto py-4">
      <Text size="subheading">Get In Touch</Text>
      <div>
        <p className="text-muted-foreground my-2">
          Contact me directly at{" "}
          <Link className="underline hover:text-foreground" href={`mailto: augustobritos95@gmail.com`}>
            augustobritos95@gmail.com
          </Link>{" "}
          or just leave me a note
        </p>
      </div>
      <NoteForm />
    </section>
  );
};

export default Note;
