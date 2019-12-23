import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  Fragment,
} from 'react';
import { useDispatch } from 'react-redux';
import { LoopCircleLoading } from 'react-loadingg';
import { Waypoint } from 'react-waypoint';
import api from '../../services/api';
import { selectRepository } from '../../store/modules/repositories/actions';
import history from '../../services/history';

import List from '../../components/List';
import ListItemRepository from '../../components/ListItemRepository';

import HeaderLayout from '../../layouts/header';
import { Container } from './styles';

export default function Main() {
  const page = useRef(1);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getApiData = async searchPage => {
    const response = await api.get(
      `/search/repositories?q=language:Javascript&sort=stars&page=${searchPage}&per_page=15`
    );
    return response.data.items;
  };

  const loadData = useCallback(
    async nextPage => {
      setLoading(true);
      const response = await getApiData(nextPage);

      setRepositories([...repositories, ...response]);
      setLoading(false);
    },
    [repositories]
  );

  useEffect(() => {
    setLoading(true);
    async function getFirstPage() {
      const response = await getApiData(1);
      setRepositories([...repositories, ...response]);
      setLoading(false);
    }
    getFirstPage();
  }, []);

  const handleShowPullRequests = data => {
    dispatch(selectRepository(data));
    history.push('/pullrequests');
  };

  const callNextPage = () => {
    page.current += 1;
    loadData(page.current);
  };

  return (
    <HeaderLayout title="GitHub Top Stars" mainPage>
      <Container>
        {repositories.length > 0 && (
          <List>
            {repositories &&
              repositories.map((repository, i) => {
                return (
                  <Fragment key={repository.id}>
                    <ListItemRepository
                      onClick={() => handleShowPullRequests(repository)}
                      key={repository.id}
                      repository={repository}
                    />
                    {i === repositories.length - 5 && (
                      <Waypoint onEnter={callNextPage} />
                    )}
                  </Fragment>
                );
              })}
          </List>
        )}
        {loading && <LoopCircleLoading color="#623199" size="large" />}
      </Container>
    </HeaderLayout>
  );
}
