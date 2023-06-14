import React from 'react';
import {useRouter} from "next/router";
import {TEMPLATE_LIST} from "../../utils/templates";
import TemplateSpec from "../TemplateSpec";
import {TemplateInfo} from "../../utils/definitions";

interface Props {
  templateInfo: TemplateInfo;
}

const TemplateAdmin = ({templateInfo}: Props) => {
  const {push} = useRouter();
  const templateDetails = TEMPLATE_LIST.find(t => t.id === templateInfo.name);

  const details = () => {
    void push('/template/' + templateInfo.name);
  };

  return <div className="bg-zinc-950 rounded-lg m-10 px-10 py-5 w-96 flex flex-col">
    <div className="flex-1">
      <div className="text-2xl mb-4">{templateDetails?.name}</div>
      <div>
        <TemplateSpec name="PRICE">{templateInfo.price + ' USDC / hr'}</TemplateSpec>
      </div>
    </div>
    <button className="w-full mt-5 bg-blue-900 px-10 py-3" onClick={details}>Edit</button>
  </div>;
}

export default TemplateAdmin
