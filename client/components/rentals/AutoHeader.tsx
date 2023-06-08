import Timer from "../common/Timer";
import {styled} from "goober";
import ExtendButton from "../modals/ExtendButton";
import StopButton from "../modals/StopButton";
import {formatExpires} from "../../utils/dates";
import TemplateSpec from "../TemplateSpec";
import {useRouter} from "next/router";
import RestartButton from "../modals/RestartButton";

const Container = styled('div')`
  display: flex;
  align-items: center;
`;

export function AutoHeader({rental, ready, handleRestart}) {
  const {reload} = useRouter();

  const restart = () => {
    fetch('/api/restart', {
      method: 'POST',
      body: JSON.stringify({token: rental.token})
    }).then(() => {
      setTimeout(() => {
        handleRestart();
      }, 5000);
    });
  };

  return (
    <Container>
      <TemplateSpec name="EXPIRE DATE">{formatExpires(rental.expires)}</TemplateSpec>
      <TemplateSpec name="EXPIRE TIME"><Timer end={rental.expires.getTime()} expired={reload}/></TemplateSpec>
      <div>
        <ExtendButton rental={rental}/>
        <StopButton rental={rental}/>
        <RestartButton onConfirm={restart}/>
      </div>
    </Container>
  );
}

export default AutoHeader
