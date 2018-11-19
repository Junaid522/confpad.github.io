const { h } = window.preact;

const getTypeEmoji = (type) => {
  switch (type) {
    case 'presentation':
      return h('span', { title: 'regular talk' }, '🎤 ');
    case 'lightning':
      return h('span', { title: 'lightning talk' }, '⚡️ ');
  }
};

const getTitle = (title, type) => h('h3', { class: 'conference-detail-item__title' }, [
  getTypeEmoji(type),
  title,
]);

const getAuthorName = author => author.name && h('span', { class: 'conference-detail-item__wrapper' }, `👤 ${author.name}`);

const getAuthorTwitter = author => {
  return author.twitter && h('span', { class: 'conference-detail-item__wrapper' },
    [
      'Twitter: ',
      h('a',
        {
          href: `https://twitter.com/${author.twitter}`,
          target: '_blank',
        },
        `@${author.twitter}`
      ),
    ]
  )
};

const getAuthorGithub = author => {
  return author.github && h('span', { class: 'conference-detail-item__wrapper' },
    [
      'GitHub: ',
      h('a',
        {
          href: `https://github.com/${author.github}`,
          target: '_blank',
        },
        `${author.github}`
      ),
    ]
  )
};

const getVideo = video => h('p', { class: 'conference-detail-item__wrapper' },
  [
    `📹 Video: `,
    h('a',
      {
        href: `${video}`,
        target: '_blank',
      },
      `${video}`
    )
  ]
);

const getSlides = slides => h('p', { class: 'conference-detail-item__wrapper' },
  [
    `📝 Slides: `,
    h('a',
      {
        href: `${slides}`,
        target: '_blank',
      },
      `${slides}`
    )
  ]
);

const getDescription = description => h('p', { class: 'conference-detail-item__description' }, description);

const ConferenceDetailItem = (props) => {
  return (
    h('div', { class: 'conference-detail-item' },
      [
        getTitle(props.title, props.type),
        props.authors && props.authors.map(
          author => h('p', { class: 'conference-detail-item__author' },
            [
              getAuthorName(author),
              getAuthorTwitter(author),
              getAuthorGithub(author),
            ],
          )
        ),
        props.videos && props.videos.map(video => getVideo(video)),
        props.slides && props.slides.map(slides => getSlides(slides)),
        props.description && getDescription(props.description),
      ]
    )
  );
};

export default ConferenceDetailItem;
