import { ReactElement, createContext, useEffect, useState } from 'react';
import { IScreen, ITrek } from '@codeless-app/interfaces';
import TrekService from '../pages/exemple/TrekService';
import useRequest from '../hooks/useRequest';

interface ITrekContext {
  trek?: ITrek;
  updateTrek: (trek: ITrek) => void;
  updateScreen: (reference: string, trek: any) => void;
}

const DEFAULT_TREK: ITrekContext = {
  trek: undefined,
  updateTrek: () => {},
  updateScreen: () => {},
};

const TrekContext = createContext<ITrekContext>(DEFAULT_TREK);

interface ITrekContextProvider {
  children: ReactElement;
  trekId: string;
}

const TrekContextProvider: any = ({ trekId, children }: ITrekContextProvider) => {
  const [trek, setTrek] = useState<ITrek | undefined>(DEFAULT_TREK.trek);

  const service = new TrekService();

  const { sendRequest, loading } = useRequest();

  const updateDataTrek = async (dataTrek:ITrek) => {
    sendRequest({
      promise: service.updateTrek(trek),
    });
  };

  useEffect(() => {
    if (trekId) {
      getTrek(trekId);
    }
  }, [trekId]);

  const getTrek = (id: string) => {
    sendRequest({
      promise: service.getTrekById(id),
      success: {
        callback: (res) => {
          setTrek(res), setTrek(res), console.log({ res });
        },
      },
    });
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (trek) updateDataTrek(trek);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [trek]);

  const updateTrek =( imcompleteTrek: any) =>{
    setTrek({...trek, ...imcompleteTrek});
  }


  const updateScreen = (reference: string, layouts: IScreen) => {
    if (trek) {
      const newNodeScreen = trek.nodes.map((item) => {
        if (item.id === reference) {
          return { ...item, data: layouts };
        } else {
          return item;
        }
      });
      const newTrek = { ...trek, nodes: newNodeScreen };
      setTrek(newTrek);
    }
  };

  return <TrekContext.Provider value={{ trek, updateTrek, updateScreen }}>{children}</TrekContext.Provider>;
};

export { TrekContextProvider };
export default TrekContext;
