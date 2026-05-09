from fastapi import APIRouter

from app.schemas.chat_schema import ChatRequest, ChatResponse
from app.services.ai_service import generate_response

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    ai_response = await generate_response(request.prompt)

    return ChatResponse(response=ai_response)