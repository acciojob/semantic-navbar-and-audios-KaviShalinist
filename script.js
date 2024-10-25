//your code he// Wait for the text "3 random audios" to appear on the page, with a timeout
cy.contains('3 Random Audios', { timeout: 6000 }).should('be.visible');

// Verify that 3 audio elements are present
cy.get('audio').should($audios => {
    // Check that there are 3 audio elements
    expect($audios).to.have.length(3);

    // Ensure each audio element has the 'controls' attribute
    $audios.each((i, el) => {
        expect(el).to.have.attr('controls');
    });

    // Verify the src attributes for each audio element
    const srcs = $audios.map((i, el) => Cypress.$(el).attr('src')).get();
    expect(srcs).to.deep.eq([
        'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
        'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
    ]);
});
re
