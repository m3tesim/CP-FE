import FormContainer from "../components/FormContainer";
import TextInput from "../components/formElements/TextInput";

export default function ApplicationForm() {
  return (
    <section>
      <FormContainer title="Personal Information">
        <TextInput field="First Name" />
        <TextInput field="Last Name" />
        <TextInput field="Email" />
        <TextInput
          field="Phone (With out dial code)"
          options={{ toggle: true, checkBox: "internal" }}
        />
        <TextInput
          field="Nationality"
          options={{ toggle: true, checkBox: "internal" }}
        />
        <TextInput
          field="Current Residence "
          options={{ toggle: true, checkBox: "internal" }}
        />
        <TextInput
          field="ID Number"
          options={{ toggle: true, checkBox: "internal" }}
        />
        <TextInput
          field="Date of Birth "
          options={{ toggle: true, checkBox: "internal" }}
        />
        <TextInput
          field="Gender"
          options={{ toggle: true, checkBox: "internal" }}
        />
      </FormContainer>
    </section>
  );
}
