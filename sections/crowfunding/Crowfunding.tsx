/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { CrowfundingBox } from 'components/CrowfundingBox';
import { Project } from 'components/Project';
import { Section } from 'layouts/Section';
import { useEffect, useState } from 'react';
import { IProject, ProjectService } from 'services/ProjectsService';
import { useContractRead } from 'wagmi';

import { crowdfundABI } from 'abi/crowdfundABI';

export const Crowfundings = () => {
  const [shouldLoad, setShouldLoad] = useState(true);
  const [crowfundings, setCrowfundings] = useState([]) as any;

  const { data, isError, isLoading } = useContractRead({
    address: '0xDE1b88a55E8A062c6DecA5D1f910C04315962328',
    abi: crowdfundABI,
    functionName: 'listFundings',
  });


  useEffect(() => {
    if(!isLoading && crowfundings.length <= 0 && shouldLoad) {
      const cwds = data.map((o: any) => ({
        tokenAddress: o[0],
        name: o[1],
        description: o[2],
        fundings: parseInt(o[3]._hex, 16) / 1e18,
      }));

      console.log('ddaaa', cwds);
      
      setCrowfundings(cwds);
      setShouldLoad(false);
    }
  }, [crowfundings, data]);

  return (
    <Section id="projects" className='mx-auto mt-[150px] mb-[150px] text-center space-y-8 max-w-[1200px]'>
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl">Crowfundings</h1>

        <a href="/crowfundings/add">Create crowfunding {'>'}</a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {crowfundings.length > 0 && crowfundings.map((crowdfunding: any, index: any) => (
          <CrowfundingBox crowfunding={crowdfunding} key={index} />
        ))}
      </div>
    </Section>
  );
};
