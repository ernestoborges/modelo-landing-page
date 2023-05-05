import styled from "styled-components"
import { FormComponent } from "./FormComponent"
import { Map } from "./Map"

import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { Footer } from "./Footer"


export function Contact() {
    return (
        <>
            <Container>
                <ContactWrapper>

                    <ContactInfo>
                        <h3>Contato</h3>
                        <ul>
                            <li>
                                <div>
                                    <IoLocationOutline />
                                    <h5>Local</h5>
                                </div>
                                <p>Rua Padre Anchieta, 123, Centro, Piúma - ES, 29285-000, Brasil</p>
                            </li>
                            <li>
                                <div>
                                    <BsTelephone />
                                    <h5>Telefone</h5>
                                </div>
                                <p>28 9 9999-9999</p>
                            </li>
                            <li>
                                <div>
                                    <HiOutlineMail />
                                    <h5>Email</h5>
                                </div>
                                <p>exemplo@email.com</p>
                            </li>
                            <li>
                                <div>
                                    <AiOutlineInstagram />
                                    <h5>Instagram</h5>
                                </div>
                                <p>@exemplo</p>
                            </li>
                            <li>
                                <div>
                                    <AiOutlineFacebook />
                                    <h5>Facebook</h5>
                                </div>
                                <p>exemplo</p>
                            </li>
                        </ul>
                    </ContactInfo>
                    <FormComponent />
                </ContactWrapper>
                <Map />
                <Footer />
            </Container>
        </>
    )
}

const Container = styled.div`
    padding: 5rem 0rem;

    background-color: var(--black);
    display: flex;
    flex-direction: column;
    gap: 6rem;

`

const ContactWrapper = styled.div`
    display: flex;
    gap: 2rem;

    padding: 0rem 10rem;

    @media (max-width: 768px){
        padding: 5rem 5rem;
    }

    @media (max-width: 400px){
        padding: 5rem 1rem;
    }

    @media (max-width: 1120px){
        flex-direction: column;
    }

`

const ContactInfo = styled.div`
    max-width: 30rem;
    background-color: var(--white);
    padding: 2rem;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > h3 {
        font-size: 3rem;
    }

    & > ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        & > li {

            & > div {
                display: flex;
                gap: 1rem;
                align-items: center;
                & > h5 {
                    font-size: 2rem;
                }
            }

            & > p {
                color: var(--gray);
                padding: 0 0 0 3rem ;
            }
        }
    }

    @media (max-width: 1120px){
        max-width: 100%;
    }
`