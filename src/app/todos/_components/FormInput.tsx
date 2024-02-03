export default function FormInput() {
    return (
        <input
            type="text"
            name="todo"
            required
            id="todo"
            placeholder="Your todo"
            className="w-full rounded-lg p-3 text-black"
            autoComplete="off"
        />
    );
}
