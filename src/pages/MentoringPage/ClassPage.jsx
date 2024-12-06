import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import {slugify} from "../../components/utils.js";

const ClassPage = ({ grade }) => {
    if (!grade || !grade.months) {
        return (
            <div className="container mx-auto py-10 px-6">
                <h1 className="text-4xl font-bold text-center mb-6 text-red-500">
                    Sınıf bilgileri yüklenemedi.
                </h1>
                <p className="text-center text-gray-600">Lütfen daha sonra tekrar deneyin.</p>
            </div>
        );
    }

    return (
        <div>
            <SectionHeader title={grade.title} description={grade.description} />
            <div className="container mx-auto py-10 px-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Tüm Aylar</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Object.keys(grade.months).map((month) => (
                        <Link
                            key={month}
                            to={`${slugify(month.toLowerCase())}`}
                            className="bg-blue-100 text-center p-6 rounded-lg shadow hover:shadow-lg hover:bg-blue-200 transition"
                        >
                            <h3 className="text-lg font-bold text-gray-800">{month}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

ClassPage.propTypes = {
    grade: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        months: PropTypes.objectOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired,
                })
            )
        ).isRequired,
    }).isRequired,
};

export default ClassPage;