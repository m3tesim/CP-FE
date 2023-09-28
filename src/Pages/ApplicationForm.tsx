import FormContainer from "../components/FormContainer";
import TextInput from "../components/formElements/TextInput";

export default function ApplicationForm() {
  return (
    <section>
      <FormContainer title="Personal Information">
        <TextInput field="First Name" />
        <TextInput field="Phone" options={{ toggle: true }} />
      </FormContainer>
    </section>
  );
}
