import {styled} from "goober";

const Frame = styled('iframe')`
  border: none;
  width: 100vw;
  height: 100%;
`;

const CenteredContent = styled('div')`
  text-align: center;
`;

const AutoFrame = ({ready, url, error, signMessage}) => {
  if (ready) {
    return <Frame src={url}></Frame>
  } else if (url) {
    return <CenteredContent>
      <div className="spinner"></div>
      <div>Starting server. This can take several minutes...</div>
    </CenteredContent>
  } else if (error) {
    return <CenteredContent>
      <div>An error occurred. Please stop server to get a refund.</div>
    </CenteredContent>;
  } else {
    return <CenteredContent>
      <button className="bg-blue-900 px-20 py-5" onClick={() => signMessage()}>Login to use server</button>
    </CenteredContent>;
  }
};

export default AutoFrame;