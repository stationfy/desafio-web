import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  Fragment,
} from 'react';
import { useSelector } from 'react-redux';
import { LoopCircleLoading } from 'react-loadingg';
import { Waypoint } from 'react-waypoint';
import api from '../../services/api';

import List from '../../components/List';
import ListItemPullRequest from '../../components/ListItemPullRequest';

import HeaderLayout from '../../layouts/header';
import { Container } from './styles';

export default function PullRequests() {
  const page = useRef(1);
  const { repository } = useSelector(state => state.repositories);
  const [pullRequests, setPullRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiData = async nextPage => {
    const { login: owner } = repository.owner;
    const response = await api.get(
      `/repos/${owner}/${repository.name}/pulls?page=${nextPage}&per_page=15`
    );
    return response.data;
  };

  const loadData = useCallback(
    async nextPage => {
      setLoading(true);
      const response = await getApiData(nextPage);

      setPullRequests([...pullRequests, ...response]);
      setLoading(false);
    },
    [pullRequests]
  );

  useEffect(() => {
    const getFirstPage = async () => {
      const response = await getApiData(1);
      setPullRequests(response);
      setLoading(false);
    };
    getFirstPage();
  }, []);

  const callNextPage = () => {
    page.current += 1;
    loadData(page.current);
  };

  return (
    <HeaderLayout title={`${repository.name} PRs`}>
      <Container>
        {pullRequests.length > 0 && (
          <List>
            {pullRequests &&
              pullRequests.map((pullRequestData, i) => {
                return (
                  <Fragment key={repository.id}>
                    <ListItemPullRequest
                      key={pullRequestData.id}
                      pullRequest={pullRequestData}
                    />
                    {i === pullRequests.length - 5 && (
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
