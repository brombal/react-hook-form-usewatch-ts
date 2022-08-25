import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

interface MyForm {
  valueA: string;
  valueB: string;
}

function App() {
  const form = useForm<MyForm>({
    defaultValues: {
      valueA: "testA",
      valueB: "testB"
    }
  });

  return (
    <FormProvider {...form}>
      <Observer />
      <input {...form.register('valueA')} />
      <input {...form.register('valueB')} />
    </FormProvider>
  )
}

function Observer() {
  // The following line causes a TS error (though it works correctly when run):
  const { valueA } = useWatch<MyForm>();

  // This line does not error:
  const valueB = useWatch<MyForm, 'valueB'>({ name: 'valueB' });

  return (
    <div>
      <div>valueA: {valueA}</div>
      <div>valueB: {valueB}</div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
