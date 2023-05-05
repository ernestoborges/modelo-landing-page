import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { BsFacebook, BsInstagram, BsTelephone, BsTwitter, BsWhatsapp } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { IoLocationOutline } from "react-icons/io5"
import styled from "styled-components"
import { products } from "../Products/Products"
import { MdArrowForwardIos } from "react-icons/md"

export function Footer() {
    return (
        <>
            <Container>
                <Wrapper>

                    <Section>
                        <Header>
                            <h2><span>modelo</span><span>engenharia</span></h2>
                            <p>
                                Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullam aboris nisi ut aliquip.
                            </p>
                        </Header>
                        <ul>
                            <li>
                                <a><BsInstagram /></a>
                            </li>
                            <li>
                                <a><BsFacebook /></a>
                            </li>
                            <li>
                                <a><BsTwitter /></a>
                            </li>
                            <li>
                                <a><BsWhatsapp /></a>
                            </li>
                        </ul>
                    </Section>
                    <Section>
                        <h3>Serviços</h3>
                        <ul>
                            {
                                products.map((product, index) =>
                                    <li key={index}>
                                        <MdArrowForwardIos />
                                        <span>
                                            {product.name}
                                        </span>
                                    </li>
                                )
                            }
                        </ul>
                    </Section>
                    <Section>
                        <h3>Links Úteis</h3>
                        <ul>
                            <li>
                                <MdArrowForwardIos />
                                <span>Inicio</span>
                            </li>
                            <li>
                                <MdArrowForwardIos />
                                <span>Quem Somos</span>
                            </li>
                            <li>
                                <MdArrowForwardIos />
                                <span>Serviços</span>
                            </li>
                            <li>
                                <MdArrowForwardIos />
                                <span>Blog</span>
                            </li>
                            <li>
                                <MdArrowForwardIos />
                                <span>Contato</span>
                            </li>
                        </ul>
                    </Section>
                    <Section>
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
                    </Section>
                </Wrapper>
                <ContainerFooter>
                            <p>
                                <span>
                                    {`Modelo Engenharia © ${new Date().getFullYear()} Todos os direitos reservados.`}
                                </span>
                            </p>
                </ContainerFooter>
            </Container>
        </>
    )
}

const Container = styled.article`
    color: var(--white);
`

const Wrapper = styled.div`
    padding: 0 10rem 5rem;
    display: flex;
    justify-content: center;
    gap: 4rem;

    @media (max-width: 1230px){
        flex-direction: column;
    }

    @media (max-width: 768px){
        padding: 0 5rem 5rem;
    }

    @media (max-width: 400px){
        padding: 0 1rem 5rem;
    }

`

const Section = styled.section`
    flex-basis: 0;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > h3 {
        font-size: 2.4rem;
        white-space: nowrap;
    }

    &:not(:first-child):not(:last-child) > ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & li {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            cursor: pointer;
                       
            & *:first-child {
                padding-top: 0.3rem;
                width: 3rem;
                min-width: 3rem;

               
            }

            & > span {
                font-size: 1.4rem;
            }

            &:hover {
                & span {
                    text-decoration: underline;
                }
            }
        }
    }

    &:first-child {
        min-width: 32rem;
        text-align: left;

        @media (max-width: 1230px){
            min-width: none;
        }

        & h2 {
            display: flex;
            flex-direction: column;
            & > span {
                line-height: 2rem;
                &:first-child{
                    text-transform: uppercase;
                }
                &:last-child{
                    letter-spacing: 1rem;
                    font-weight: normal;
                }
            }
        }

        & > ul {
            display: flex;
            align-self: start;
            justify-content: center;
            align-items: center;
            gap: 4rem;

            & > li {
                background-color: transparent;
                padding: 1rem;
                font-size: 3rem;
                border-radius: 1rem;
                transition: color 0.3s, background-color 0.3s;
                cursor: pointer;
        
                & > a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                &:hover {
                    background-color: var(--white);
                    color: var(--black);
                }
            }
        }
    }

    &:last-child {
        & > ul {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            & > li {
                display: flex;
                flex-direction: column;

                & > div {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 2rem;
                }

                & > p {
                    padding-left: 3rem;
                }
            }
        }
    }
`

const Header = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`



const ContainerFooter = styled.footer`
    padding: 2rem 10rem;
    border-top: 0.1rem solid var(--white);

    @media (max-width: 768px){
        padding: 2rem 5rem;
    }

    @media (max-width: 400px){
        padding: 2rem 1rem;
    }
`