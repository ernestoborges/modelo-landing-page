import { ErrorMessage, Field, Formik } from "formik";
import styled from "styled-components"

interface MyFormValues {
    name: string,
    email: string,
    phone: string,
    message: string,
}

const initialValues: MyFormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
}

const handleValidate = (values: MyFormValues) => {
    const errors: any = {};

    // Email
    if (!values.email) {
        errors.email = 'This field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email';
    }

    // name
    if (!values.name) {
        errors.name = 'Campo Obrigatório';
    }

    // phone
    if (!values.phone) {
        errors.phone = 'Campo Obrigatório';
    } else if (
        !/^\d+$/.test(values.phone)
    ) {
        errors.phone = "Apenas números";
    }
    //  else if (values.phone && values.phone.length !== 11) {
    //     errors.phone = "Mínimo 11 dígitos"
    // }

    // message
    if (!values.message) {
        errors.message = 'Campo Obrigatório';
    }


    return {
        ...errors
    };
}

export function FormComponent() {
    return (
        <>
            <Container>
                <Formik
                    initialValues={initialValues}
                    // innerRef={formikRef}
                    validate={handleValidate}
                    onSubmit={(values, { setSubmitting }) => {
                        alert(values)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <>

                            <Header>
                                <h3>Fale conosco</h3>
                                <h4>Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad.</h4>
                            </Header>
                            <Form onSubmit={handleSubmit}>

                                <FormField>
                                    <div>
                                        <ErrorMessage name="name" component="span" />
                                    </div>
                                    <Field
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        placeholder="Nome"
                                    />
                                </FormField>
                                <FormField>
                                    <div>
                                        <ErrorMessage name="email" component="span" />
                                    </div>
                                    <Field
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Email"

                                    />
                                </FormField>
                                <FormField>
                                    <div>
                                        <ErrorMessage name="phone" component="span" />
                                    </div>
                                    <Field
                                        type="text"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        placeholder="Telefone"
                                    />
                                </FormField>
                                <FormField>
                                    <div>
                                        <ErrorMessage name="name" component="span" />
                                    </div>
                                    <Field
                                        type="text"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        placeholder="Mensagem"
                                    />
                                </FormField>

                                <Button
                                    type="submit"
                                // disabled={isSubmitting}
                                >
                                    Enviar
                                </Button>

                            </Form>
                        </>
                    )}
                </Formik>

            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--white);

    & > h4 {
        font-weight: normal;
    }
    
`

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;

`

const FormField = styled.label`
    grid-area: 1 span / 2 span ;

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    color: var(--white);
    
    & > div:first-child {
        display: flex;
        gap: 1rem;
        
        height: 2.4rem;
        & > span {
            color: var(--red)
        }
    }

    & > input {
        padding: 1rem;
        background-color: var(--white);
        border: 0.1 solid var(--black);
        border-radius: 0.4rem;
    }
`

const Button = styled.button`
    margin-top: 2rem;
    padding: 2rem;
    background-color: var(--gray);
    border: 0.1rem solid transparent;
    border-radius: 0.8rem;
    color: var(--black);
    font-size: 1.6rem;
    font-weight: bold;
`