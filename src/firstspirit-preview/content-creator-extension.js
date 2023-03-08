(() => {
  const EXECUTABLE_CLASS = 'class:FirstSpirit Connect for Commerce - Preview Message Receiver';
  const POST_MESSAGE_NAMESPACE = 'fcecom';
  const POST_MESSAGE_ORIGIN = '*';
  const debug = (...args) => console && console.debug('fcecom %o', ...args);

  const postToStoreFront = (topic, payload = null) => {
    WE_API.Preview.getWindow().postMessage({ [POST_MESSAGE_NAMESPACE]: { topic, payload } }, POST_MESSAGE_ORIGIN);
  };
  const postToServer = (topic, payload = {}) => {
    WE_API.Common.execute(EXECUTABLE_CLASS, { topic, ...payload });
  };

  let lastRequestedPreviewElement = null;
  const handleRequestedPreviewElement = (requestedPreviewElement = null) => {
    if (requestedPreviewElement) lastRequestedPreviewElement = requestedPreviewElement;
    lastRequestedPreviewElement && postToServer('requestedPreviewElement', lastRequestedPreviewElement);
  };

  WE_API.Common.addPreviewRequestHandler((FSID) => {
    if (FSID.getStoreType() === 'sitestore' && FSID.getId() != -1) {
      WE_API.Common.setPreviewElement(FSID);
      handleRequestedPreviewElement({ pageRefId: `${FSID.getId()}`, language: FSID.getLanguage() });
    }
  });

  window.addEventListener('message', (e) => {
    if (e.data instanceof Object && POST_MESSAGE_NAMESPACE in e.data) {
      const { topic, payload } = e.data[POST_MESSAGE_NAMESPACE];
      switch (topic) {
        case 'connected': {
          handleRequestedPreviewElement();
          break;
        }
        case 'updatedStoreFrontUrl': {
          const { url } = payload;
          postToServer('updatedStoreFrontUrl', { url });
          break;
        }
        default: {
          console.error(new Error(`Couldn't handle '${topic}'-topic in ContentCreator`), { message: { topic, payload } });
        }
      }
    }
  });

  window.FCECOM_API = {
    applyMessage: ({ topic, ...payload }) => {
      debug('FCECOM_API.applyMessage', { topic, payload });
      switch (topic) {
        case 'openReport': {
          const { reportParam, ...params } = payload;
          WE_API.Report.show(reportParam, params, true);
          break;
        }
        case 'openStoreFrontUrl': {
          postToStoreFront('openStoreFrontUrl', payload);
          break;
        }
        case 'setContentCreatorPreviewElement': {
          const { id, type, lang, url, fsid } = payload;
          WE_API.Common.setPreviewElement(fsid);
          postToStoreFront('updatedContentCreatorPreviewElement', { id, type, lang, url, hasReference: !!fsid });
          break;
        }
        default: {
          console.error(new Error(`Couldn't handle '${topic}'-topic in FCECOM_API`), { message: { topic, payload } });
        }
      }
    },
  };
})();
