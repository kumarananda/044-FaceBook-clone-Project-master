import { useEffect } from "react"

const useMouseDown =(ref, dropdown, setDropdown) => {
    useEffect(()=>{

        // // type 01
        let handler = e => {
            if (!ref.current?.contains(e.target)) {
              setDropdown(false);
            //   console.log(ref.current.contains(e.target));
            }
        };
        
        if (dropdown) {
            document.addEventListener("mousedown", handler);
        }

        return () => {
            document.removeEventListener("mousedown", handler);
        };

    })
}
export default useMouseDown;


/**
 *   const ref = useRef();

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    let handler = e => {
      if (!ref.current.contains(e.target)) {
        setDropdown(false);
        // console.log(menuRef.current.contains(e.target));
      }
    };

    if (dropdown) {
      document.addEventListener("mousedown", handler);
    }

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

 */