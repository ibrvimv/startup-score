'use client'
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Chat = () => {
	const { messages, input, handleInputChange, handleSubmit } = useChat({
		api: "/api/openai",
	});

	const chatContainer = useRef<HTMLDivElement>(null);

	const scroll = () => {
		if (chatContainer.current) {
			const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
			if (scrollHeight >= scrollTop + offsetHeight) {
				chatContainer.current.scrollTo(0, scrollHeight + 200);
			}
		}
	};

	useEffect(() => {
		scroll();
	}, [messages]);

	const renderResponse = () => {
		return (
			<div className="response h-fit flex flex-col gap-8 mb-20">
				{messages.map((m, index) => (
					<div
						key={m.id}
						className={`flex items-start chat-line ${m.role === "user" ? "user-chat" : "ai-chat"
							}`}
					>
						<Image
							className="avatar"
							alt="avatar"
							width={40}
							height={40}
							src={m.role === "user" ? "/user-avatar.png" : "/ai-avatar.png"}
						/>
						<div className="message-container" style={{ width: "100%", marginLeft: "16px" }}>
							<div
								className={`message-bubble ${m.role === "user" ? "" : ""
									} p-4 rounded-lg`}
							>
								<p
									className={`message-content ${m.role === "user" ? "text-left" : "text-justify"
										} text-sm leading-relaxed`}
								>
									{m.content.split("\n").map((line, idx) => (
										<span key={idx} className={`${line.startsWith("###") ? "font-bold" : ""}`}>
											{line}
											<br />
										</span>
									))}
								</p>
							</div>
							{index < messages.length - 1 && <div className="horizontal-line mt-2 mb-2 border-gray-300" />}
						</div>
					</div>
				))}
			</div>
		);
	};


	return (
		<div ref={chatContainer} className="mb-44 w-full">
			{renderResponse()}
			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 items-center">
				<textarea
					name="input-field"
					rows={5}
					placeholder="Say anything"
					onChange={handleInputChange}
					value={input}
					className="w-full text-dark px-5 py-3   rounded-md"
				/>
				<button type="submit" className="bg-dark border text-whte w-fit px-5 py-3 font-bold uppercase rounded-md hover:bg-white hover:text-primary duration-150">Ask question</button>
			</form>
		</div>
	);
};

export default Chat;
