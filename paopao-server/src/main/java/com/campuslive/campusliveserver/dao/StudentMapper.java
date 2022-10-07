package com.campuslive.campusliveserver.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface StudentMapper {
    //用于学生验证
    @Select("select count(stuPersonID) from student where stuPersonID=#{stuPersonID} and stuID=#{stuID} and stuName=#{stuName} and stuSchool=#{stuSchool}")
    int identityVerify(String stuPersonID,int stuID,String stuName,String stuSchool);
}

