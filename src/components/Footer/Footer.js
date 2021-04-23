import React from 'react'
import {FaFacebook,
    FaTwitter,
    FaGithub} from 'react-icons/fa'
import {FooterContainer, FooterSubscription, FooterSubheading, FooterSubText,
Form, FormInput, FooterLinksContainer,
FooterLinkWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
SocialMedia,
SocialMediaWrap,
SocialLogo,
SocialIcon,
WebsiteRights,
SocialIcons,
SocialIconLink} from './Footer.elements'
import {Button} from '../../globalStyles'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubheading>
                    join my world!
                </FooterSubheading>

                <FooterSubText>You can unsubsribe at any time</FooterSubText>

                <Form>
                    <FormInput name="email" type="email" placeholder="your email" />
                        <Button fontBig>Subscribe</Button>
                    
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About me</FooterLinkTitle>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Contact me</FooterLinkTitle>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        Magda
                    </SocialLogo>

                    <WebsiteRights>Magda Sokol 2020</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/magda.sokolovic" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="https://twitter.com/magda_sokol" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href="https://github.com/magdasokolovic" target="_blank" aria-label="Github">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
