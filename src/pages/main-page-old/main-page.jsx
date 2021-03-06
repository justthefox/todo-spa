import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createFilter } from 'react-search-input';
import { Page } from '../../layout/page';
import TaskList from '../../components/task-list/task-list';
import TaskItem from '../../components/task-item/task-item';
import { getFilteredTasks } from '../../store/selectors';
import { fetchTasks } from '../../store/actions/tasks';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    // eslint-disable-next-line
  }, []);

  const isFetching = useSelector((store) => store.tasks.isFetching);
  const search = useSelector((store) => store.search);
  const filter = useSelector((store) => store.filter) || [];
  const tasks =
    useSelector(
      (store) => getFilteredTasks(store.tasks.taskList, filter),
      shallowEqual,
    ) || [];

  const filteredList = tasks
    .filter(createFilter(search, ['title', 'description']))
    .map(({ id, ...props }) => <TaskItem key={id} id={id} {...props} />);

  // const renderTaskList = () =>
  //   filteredList.length === 0 ? (
  //     <p>Задачи не найдены</p>
  //   ) : (
  //     <TaskList>{filteredList}</TaskList>
  //   );

  return (
    <Page>
      {/* <TaskForm />
      <FilterList /> */}
      {isFetching && <p>Загрузка...</p>}
      {/* {!isFetching && renderTaskList()} */}
    </Page>
  );
};
