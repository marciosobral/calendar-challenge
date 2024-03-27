import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('Add a reminder', () => {
  it('Test the creation of a reminder', () => {
    render(
      <>
        <App />
      </>
    );
    
    const addButton = screen.getByText(/Add a reminder/i);
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);

    const form = document.getElementById('ReminderAddForm');
    expect(form).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Reminder Title'), { target: { value: 'Cairo Trip' } });
    fireEvent.change(screen.getByPlaceholderText('Reminder Description'), { target: { value: 'I have no idea' } });
    fireEvent.change(screen.getByPlaceholderText('City'), { target: { value: 'Cairo' } });
    fireEvent.change(document.getElementById('TimeInput'), { target: { value: '20:00' } });
    fireEvent.click(screen.getByDisplayValue('purple'));
    fireEvent.submit(form);

    const remindertest = screen.getByText('Cairo Trip');
    expect(remindertest).toBeInTheDocument();

  })
})