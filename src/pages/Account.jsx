import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from './../features/authentication/UpdateUserDataForm'

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <p>Update user data form</p>
        <UpdateUserDataForm/>
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm/>
      </Row>
    </>
  );
}

export default Account;
