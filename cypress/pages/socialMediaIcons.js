export class SocialMediaIcons {
    elements = {
        followVerizonFooter: () => cy.get('[aria-label="Follow Verizon menu list"]'),
        facebookButton: () => cy.get('[aria-label="Follow Verizon on Facebook"]'),
        twitterButton: () => cy.get('[aria-label="Follow Verizon on Twitter"]'),
        youtubeButton: () => cy.get('[aria-label="Follow Verizon on Youtube"]'),
        instagramButton: () => cy.get('[aria-label="Follow Verizon on Instagram"]'),
    };

    validateSocialMediaIcons = () => {
        this.elements.followVerizonFooter().scrollIntoView();
        this.elements.facebookButton().eq(0).should("have.attr", "href").and("include", "facebook.com");
        this.elements.twitterButton().eq(0).should("have.attr", "href").and("include", "twitter.com");
        this.elements.youtubeButton().eq(0).should("have.attr", "href").and("include", "youtube.com");
        this.elements.instagramButton().eq(0).should("have.attr", "href").and("include", "instagram.com");
    };
}
