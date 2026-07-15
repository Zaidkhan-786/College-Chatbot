from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.database.database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)

    phone_number = Column(String, unique=True, nullable=False)

    year = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)