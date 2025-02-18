```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
  }, [count]); // Only re-run effect if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    // Incorrect way to update state asynchronously here! 
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); //Correct
    }, 1000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```