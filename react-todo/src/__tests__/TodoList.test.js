import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Exercise')).toBeInTheDocument();
        expect(screen.getByText('Go out for dinner')).toBeInTheDocument();
        expect(screen.getByText('Complete assessments')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add new todo');
        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText('Add'));
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo completion', () => {
        render(<TodoList />);
        const todo = screen.getByText('Exercise');
        fireEvent.click(todo);
        expect(todo).toHaveStyle('text-decoration: line-through');
        fireEvent.click(todo);
        expect(todo).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getByText('Go out for dinner').nextSibling;
        fireEvent.click(deleteButton);
        expect(screen.queryByText('Go out for dinner')).toBeNull();
    });
});
