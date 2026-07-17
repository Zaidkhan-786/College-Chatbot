from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.student import Student
from app.schemas.student_schema import StudentCreate

router = APIRouter(
    prefix="/students",
    tags=["Students"]
)


@router.post("/")
def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    new_student = Student(
        full_name=student.full_name,
        phone_number=student.phone_number
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return {
        "message": "Student Registered",
        "student_id": new_student.id
    }