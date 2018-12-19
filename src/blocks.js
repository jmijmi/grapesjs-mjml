export default (editor, opt = {}) => {
  let bm = editor.BlockManager;

  if (opt.resetBlocks) {
    bm.getAll().reset();
  }

  //for future use of using categories
  const categoryStructure = '';
  const categoryContent = '';
  const categoryTemplates = '';

  bm.add('mj-1-column', {
    label: '1 Column',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    category: categoryStructure,
  });

  bm.add('mj-2-columns', {
    label: '2 Columns',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    category: categoryStructure,
  });

  bm.add('mj-3-columns', {
    label: '3 Columns',
    content: `<mj-section>
        <mj-column><mj-text>Content 1</mj-text></mj-column>
        <mj-column><mj-text>Content 2</mj-text></mj-column>
        <mj-column><mj-text>Content 3</mj-text></mj-column>
      </mj-section>`,
    attributes: { class: 'gjs-fonts gjs-f-b3' },
    category: categoryStructure,
  });

  bm.add('mj-text', {
    label: 'Text',
    content: '<mj-text>Insert text here</mj-text>',
    attributes: { class: 'gjs-fonts gjs-f-text' },
    category: categoryContent,
  });

  bm.add('mj-button', {
    label: 'Button',
    content: '<mj-button>Button</mj-button>',
    attributes: { class: 'gjs-fonts gjs-f-button' },
    category: categoryContent,
  });

  bm.add('mj-image', {
    label: 'Image',
    content: '<mj-image src="http://placehold.it/350x250/78c5d6/fff/img.jpg"></mj-image>',
    attributes: { class: 'gjs-fonts gjs-f-image' },
    category: categoryContent,
  });

  bm.add('mj-divider', {
    label: 'Divider',
    content: '<mj-divider/>',
    attributes: { class: 'gjs-fonts gjs-f-divider' },
    category: categoryContent,
  });

  bm.add('mj-social', {
    label: 'Social',
    content: '<mj-social/>',
    attributes: { class: 'fa fa-share-alt' },
    category: categoryContent,
  });

  bm.add('mj-spacer', {
    label: 'Spacer',
    content: '<mj-spacer/>',
    attributes: { class: 'fa fa-arrows-v' },
    category: categoryContent,
  });

  /*Grid Item */
  const styleFont = `style="font-family: Arial, Times New Roman, Serif; font-size: 1em;"`;
  bm.add('grid-items', {
    label: 'Grid Items',
    content: `
      <mj-section>
        <mj-column>
          <mj-image style="align:left;" align="left" src="http://placehold.it/150x150/78c5d6/fff"></mj-image>
            <mj-text>
              <h1 class="card-title">Title here</h1>
              <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section>
            <mj-column>
              <mj-image style="align:left;" align="left" src="http://placehold.it/150x150/78c5d6/fff"></mj-image>
                <mj-text>
                  <h1 class="card-title">Title here</h1>
                  <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
                </mj-text>
            </mj-column>
        </mj-section>
    `,
    attributes: { class: 'fa fa-th fix-small-block-icon grid-items' },
    category: categoryTemplates,
  });

  /*Text Section */
  bm.add('text-sect', {
    label: 'Text Section',
    content: `
    <mj-section>
      <mj-column>
           <mj-text><h1 class="card-title">Insert title here</h1></mj-text>
           <mj-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</mj-text>
      </mj-section>
      </mj-column>
    `,
    attributes: { class: 'gjs-fonts gjs-f-h1p text-sect' },
    category: categoryTemplates,
  });

  /*List Item */
  bm.add('list-items', {
    label: 'List Items',
    category: categoryTemplates,
    content: `
      <mj-section>
      <mj-column>
          <mj-image style="align:left;" align="left" src="http://placehold.it/150x150/78c5d6/fff"></mj-image>
      </mj-column>
      <mj-column>
        <mj-text><h1 class="card-title">Title here</h1></mj-text>
        <mj-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</mj-text>
      </mj-column>
      </mj-section>
      <mj-section>
      <mj-column>
          <mj-image style="align:left;" align="left" src="http://placehold.it/150x150/78c5d6/fff"></mj-image>
      </mj-column>
      <mj-column>
        <mj-text><h1 class="card-title">Title here</h1></mj-text>
        <mj-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</mj-text>
      </mj-column>
      </mj-section>
          `,
    attributes: { class: 'fa fa-th-list fix-small-block-icon list-items' },
  });
}
